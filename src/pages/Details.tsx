import { useEffect, useState } from "react";
import { WidgetsFactory } from "@itsy-ui/core";
import { getUrlParamValue } from "@itsy-ui/utils";

const dataLoader = WidgetsFactory.instance.services["DataLoaderFactory"];
const Details: React.FC = () => {
    const [item, setItem] = useState(null);
    const datasource = dataLoader.getLoader("datasource");

    useEffect(() => {
        const id = getUrlParamValue("id");
        const data = datasource.getObject(null, id);
        setItem(data);
    }, []);

    return item && <div className="travel-details-page">
        <div className="travel-page-inner-container">
            <div className="travel-title">
                <h3>{item.name}</h3>
            </div>
            <div className="travel-image">
                <img alt={item.name} src={item.profile} />
            </div>
            <p className="travel-detaildescription">
                {item.detaildescription}
            </p>
        </div>
    </div>;
}

export default Details;
