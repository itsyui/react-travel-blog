import { ICustomStateMachineData, ICustomStateMachineProvider, WidgetsFactory, DataLoaderFactory, IDataSourceLake } from "@itsy-ui/core";

// retrieve the DataLoaderFactory singleton
const dataLoader = WidgetsFactory.instance.services["DataLoaderFactory"] as DataLoaderFactory;
// retrieve the custom state machine provider
const customStateProvider = dataLoader.getLoader<ICustomStateMachineProvider>("customStateProvider");

// this function is called when the FORM SUBMIT is triggered
function doNewBlogFormSubmit(evt: any) {
    return (getState: any, dispatch: any, transition: any) => {
        const datasource = dataLoader.getLoader<IDataSourceLake>("datasource");
        // Get the datasource and create the object
        datasource.create(evt.values, {});
        // Navigate to home page after its done
        transition({
            type: "NAVIGATE_URL",
            url: `/`,
        });

        // Complete the FORM_SUBMIT transition with its ending transition

    }
};

// Define the custom state machine override object.
// implements the ICustomStateMachineData interface.
const newBlogForm: ICustomStateMachineData = {
    stateJSON: {
        "states": {
            // State overrides are possible if the widget has that state declared already.
            // formSubmit state is defined in ItsyForm.
            "formSubmit": {
                "onEntry": [
                    // define a custom "onEntry" that calls the mapDispatchToAction as defined below
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
            // Define a mapping action to implement business logic
            // whenever the form submit event is triggered.
            onNewBlogFormSubmit: (evt) => dispatch(doNewBlogFormSubmit(evt)),
        };
    },
};

// register the custom override with Control Name, ContextPath in which the
// override needs to occur and the ICustomStateMachineData object.
customStateProvider.registerCustomStateMachine("FormWidget", { "id": "new_blog" }, newBlogForm);
