/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import type { ScenePF2e } from "./document.ts";

export declare class SceneConfigPF2e<TDocument extends ScenePF2e> extends SceneConfig<TDocument> {
    #private;
    get scene(): TDocument;
    protected _renderInner(data: FormApplicationData<TDocument>, options: RenderOptions): Promise<JQuery>;
    activateListeners($html: JQuery): void;
    protected _onSubmit(event: Event, options?: OnSubmitFormOptions): Promise<false | Record<string, unknown>>;
    protected _getSubmitData(updateData?: Record<string, unknown>): Record<string, unknown>;
    /** Intercept flag update and change to boolean/null. */
    protected _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
}
