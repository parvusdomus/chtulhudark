export default class cdActorSheet extends ActorSheet{
    get template(){
        return `systems/chtulhudark/templates/investigator-sheet.html`;
    }

    getData() {
        const data = super.getData();
        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);
        if (!this.options.editable) return;

        html.find('.insanity_roll').click(ev => {
            const element = ev.currentTarget;
            const dataset = element.dataset;
            const insanity=dataset.insanity;
            let r = new Roll("1d6cs<="+insanity);
            r.toMessage();

        });

        html.find('.nDice_roll').click(ev => {
            const element = ev.currentTarget;
            const dataset = element.dataset;
            const nDice=dataset.ndice;
            let r = new Roll(nDice+"d6kh");
            r.toMessage();
            
        });

    }
}