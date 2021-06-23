import { StateManagerContext } from "@itsy-ui/core";
import { ItsyGrid } from '@itsy-ui/data';
import { ItsyToolbar } from '@itsy-ui/navigation';
import { ItsyRow, ItsyColumn } from "@itsy-ui/layout";
import "../handlers/navigationHandler";

const gridSchema = {
    "id": "blog_list",
    "viewAttributes": {
        "attributes": {
            cardType: "media",
            media: "profile",
            primary: "name",
            secondary: "description",
        }
    },
    "propertyDefinitions": {
        "id": {
            "id": "id",
            "displayName": "ID",
        },
        "name": {
            "id": "name",
            "displayName": "Title",
            "propertyType": "string"
        },
        "description": {
            "id": "description",
            "displayName": "Description",
            "propertyType": "string"
        },
        "detaildescription": {
            "id": "detaildescription",
            "displayName": "DetailDescription",
            "propertyType": "string"
        },
        "profile": {
            "id": "profile",
            "displayName": "Profile",
        }
    }
};
const schema = {
    typeId: "blog_list",
    gridSchema: gridSchema,
    dataSource: "datasource",
    gridViewType: "card",
    controlID: "travel_blogs"
}

const toolbarSchema = {
    data: [
        {
            displayText: "Add",
            isPrimary: true,
            name: "add_blog",
            enabled: true
        }
    ],
    typeId: "blog_list",
    align: "right"
};

const Home: React.FC = () => {
    return (
        <StateManagerContext.Provider key="grid-context" value={{ contextPath: { "id": "travel_blogs" } }}>
            <ItsyRow className="home-page-row">
                <ItsyColumn>
                    <ItsyToolbar className="travel-added" schema={toolbarSchema} />
                    <ItsyGrid schema={schema} />
                </ItsyColumn>
            </ItsyRow>
        </StateManagerContext.Provider>
    );
};

export default Home;
