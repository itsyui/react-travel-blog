import { ICustomStateMachineData, ICustomStateMachineProvider, WidgetsFactory, DataLoaderFactory } from "@itsy-ui/core";

const dataLoader = WidgetsFactory.instance.services["DataLoaderFactory"] as DataLoaderFactory;
const customStateProvider = dataLoader.getLoader<ICustomStateMachineProvider>("customStateProvider");

function doTBSelectedRowsDone(evt: any) {
    return (getState: any, dispatch: any, transition: any) => {
        const selectedRows = evt.selectedRows;
        transition({
            type: "NAVIGATE_URL",
            url: `/details?id=${selectedRows[0].id}`,
        });
    };
}

const blogsGrid: ICustomStateMachineData = {
    stateJSON: {
        "states": {
            "gridSelectedRows": {
                "onEntry": [
                    "onTBSelectedRowsDone",
                ],
                "on": {
                    "GRID_SELECTED_ROWS_DONE": "gridSelectedRowsDone",
                },
            },
        },
    },
    mapDispatchToAction: (dispatch) => {
        return {
            onTBSelectedRowsDone: (evt) => dispatch(doTBSelectedRowsDone(evt)),
        };
    },
};

customStateProvider.registerCustomStateMachine("GridWidget", { "id": "travel_blogs" }, blogsGrid);
