import { StateManagerContext } from "@itsy-ui/core";
import { ItsyForm } from '@itsy-ui/form';
import { ItsyRow, ItsyColumn } from "@itsy-ui/layout";
// import the custom override handler so the code is registered
import "../handlers/newBlogFormHandler";

const formSchema = {
    "title": "Add new blog",
    "description": "Add new travel information",
    "propertyDefinitions": {
        "name": {
            "id": "name",
            "displayName": "Title",
            "propertyType": "string",
            "ui:widget": "text"
        },
        "description": {
            "id": "description",
            "displayName": "Introduction",
            "propertyType": "string",
            "ui:widget": "text"
        },
        "detaildescription": {
            "id": "detaildescription",
            "displayName": "Details",
            "propertyType": "string",
            "ui:widget": "textarea"
        },
        "profile": {
            "id": "profile",
            "displayName": "Upload Image",
            "ui:widget": "fileupload",
            "showFile": true,
            "resultType": "base64",
            "acceptFileTypes": [
                ".jpg",
                ".JPG",
                ".jpeg",
                ".JPEG",
                ".png",
                ".PNG"
            ]
        }
    }
}

const schema = {
    typeId: "new_blog",
    formSchema: formSchema,
    controlID: "new_blog"
}

// Define ItsyForm widget with StateManagerContext.Provider to set the contextPath
// Its important to define the contextPath as its used for widget overrides.
const AddTravel = () => {
    return <StateManagerContext.Provider key="new_blog" value={{ contextPath: { "id": "new_blog" } }}>
        <ItsyRow className="form-page-travel">
            <ItsyColumn>
                <ItsyForm type="form" schema={schema} />
            </ItsyColumn>
        </ItsyRow>
    </StateManagerContext.Provider>
}

export default AddTravel;
