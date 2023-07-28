import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export const config = defineConfig({
    projectId: "282vh8t1",
    dataset: "production",
    title: "mySite",
    apiVersion: "2023-07-26",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
})