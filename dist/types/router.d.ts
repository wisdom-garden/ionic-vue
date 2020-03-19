import VueRouter, { Route } from 'vue-router';
import { PluginFunction } from 'vue';
import { RouterArgs } from './interfaces';
export default class Router extends VueRouter {
    direction: number;
    directionOverride: number | null;
    viewCount: number;
    prevRouteStack: Route[];
    history: any;
    static installed: boolean;
    static install: PluginFunction<never>;
    constructor(args?: RouterArgs);
    extendTransitionConfirmation(): void;
    extendHistory(): void;
    canGoBack(): boolean;
    guessDirection(nextRoute: Route): number;
}
//# sourceMappingURL=router.d.ts.map