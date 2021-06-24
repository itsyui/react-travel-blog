import { WidgetsFactory, CommandOptions, DataLoaderFactory, ICommandManager } from "@itsy-ui/core";

// retrieve the DataLoaderFactory singleton
const dataLoader = WidgetsFactory.instance.services["DataLoaderFactory"] as DataLoaderFactory;
// retrieve the command manager
const commandManager = dataLoader.getLoader<ICommandManager>("commandManager");

// Implement a command pattern object based on CommandOptions<T> interface.
// In this command, whenever ADD command is executed, it navigates to a new page.
const addCommand: CommandOptions<any> = {
    /**
     * Return true to allow executing the command
     */
    canExecute: (data) => {
        return true;
    },
    /**
     * Implement the execution logic, in this command we simply transition with
     * NAVIGATE_URL to a route /new.
     */
    execute: async (data, transition) => {
        transition({
            type: "NAVIGATE_URL",
            url: `/new`,
        });
    },
};

// Register the command with a command_id and refer the command_id anywhere in the application
commandManager.registerCommand("add_blog", {}, addCommand);