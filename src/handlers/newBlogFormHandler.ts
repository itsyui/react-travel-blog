import { ICustomStateMachineData, ICustomStateMachineProvider, WidgetsFactory, DataLoaderFactory, IDataSourceLake } from "@itsy-ui/core";

const dataLoader = WidgetsFactory.instance.services["DataLoaderFactory"] as DataLoaderFactory;
const customStateProvider = dataLoader.getLoader<ICustomStateMachineProvider>("customStateProvider");

function doNewBlogFormSubmit(evt: any) {
    return (getState: any, dispatch: any, transition: any) => {
        const datasource = dataLoader.getLoader<IDataSourceLake>("datasource");
        datasource.create(evt.values, {});
        transition({
            type: "NAVIGATE_URL",
            url: `/`,
        });
    }
};

const newBlogForm: ICustomStateMachineData = {
    stateJSON: {
        "states": {
            "formSubmit": {
                "onEntry": [
                    "onNewBlogFormSubmit",
                ],
                "on": {
                    "FORM_AFTER_SUBMIT": "formAfterSubmit",
                    "FORM_ERROR": "formError",
                },
            },
        },
    },
    mapDispatchToAction: (dispatch) => {
        return {
            onNewBlogFormSubmit: (evt) => dispatch(doNewBlogFormSubmit(evt)),
        };
    },
};

customStateProvider.registerCustomStateMachine("FormWidget", { "id": "new_blog" }, newBlogForm);
