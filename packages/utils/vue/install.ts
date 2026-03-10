import { App, Directive, Plugin } from "vue";

// 定义一个类型，将组件类型 T 与 Vue 插件类型 Plugin 进行合并，确保组件类型 T 具有 install 方法
export type SFCWithInstall<T> = T & Plugin

// 安装组件
export const withInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = (app: App) => {
        app.component((component as any).name, component as SFCWithInstall<T>);
    };
    return component as SFCWithInstall<T>;
};

// 批量安装组件
export const withInstallAll = <T>(components: T[]) => {
    components.forEach((component) => {
        withInstall(component);
    });
    return components;
};

// 安装指令
export const withInstallDirective = <T>(directive: T, directiveName?: string) => {
    (directive as SFCWithInstall<T>).install = (app: App) => {
        app.directive(directiveName || (directive as any).name, directive as SFCWithInstall<Directive>);
    };
    return directive as SFCWithInstall<T>;
};

