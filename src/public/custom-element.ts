


class CustomElement extends HTMLElement {
	

	buton:HTMLButtonElement;

	private html():string {
		return  /*html*/ `

		<style>
			.rojo{
				color:red;
			}

		</style>

		<p class='rojo'>ESTE ES UN WEB COMPONENT PERSONALIZADO</p>
		`;
	}

	
	private renderTemplate():void{
		this.attachShadow({mode:'open'});
		const template = this.html();
		this.shadowRoot.innerHTML += template;



	}
	




  constructor() {
		super();

		this.renderTemplate();
		
		console.log('Custom element started');

	}
}

customElements.define('custom-element', CustomElement);


