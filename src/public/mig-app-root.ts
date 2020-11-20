


class MigAppRoot extends HTMLElement {
	
	private html():string {
		return  /*html*/ `
		<p>MIsssG-APsssP-ROOooo    TsssTssT</p>
		`;
	}

	
	private renderTemplate():void{
		this.attachShadow({mode:'open'});
		const template = this.html();
		this.shadowRoot.innerHTML += template;
	}
	
	//private initEventListeners(){	}



    constructor() {
		super();
		this.renderTemplate();
		//this.initEventListeners();
		console.log('MiddAppRoot started');

	}
}

customElements.define('mig-app-root', MigAppRoot);
