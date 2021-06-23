import { WidgetsFactory, CommandOptions, DataLoaderFactory, ICommandManager } from "@itsy-ui/core";

const dataLoader = WidgetsFactory.instance.services["DataLoaderFactory"] as DataLoaderFactory;
const commandManager = dataLoader.getLoader<ICommandManager>("commandManager");

const addCommand: CommandOptions<any> = {
    canExecute: (data) => {
        return true;
    },
    execute: async (data, transition) => {
        transition({
            type: "NAVIGATE_URL",
            url: `/new`,
        });
    },
};
commandManager.registerCommand("add_blog", {}, addCommand);