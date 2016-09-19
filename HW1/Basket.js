var prodcuts = [{
					name : "gun",
					price : 12.9,
					inventory : 200
				}, {
					name : "m4",
					price : 30,
					inventory : 800
				}, {
					name : "car",
					price : 30000,
					inventory : 10
				}, {
					name : "knife",
					price : 3,
					inventory : 80
				}];

			function ProductLineItem(product) {		//constructor
				this.name=product["name"];
				this.price=product["price"];
				this.count=1;
			}

			ProductLineItem.prototype = {
				prodInfo:function(){
					var str="";
					str=this.count+"*"+this.name+"/ price= "+this.price+"<br>";
					return str;
				}
			};

			var basket = (function(){
				var prodbask=[];
				return {
					addProduct : function(productID){
						if(prodcuts[productID] && prodcuts[productID]["inventory"]>=1 ) {		//якщо на складі є принаймні одиниця цього товару
							if(!prodbask[productID]){											//якщо в корзині ще не було цієї позиції
								prodbask[productID]= new ProductLineItem(prodcuts[productID]);
							}
							else{																//якщо в корзині вже є такийже товар
								prodbask[productID]["count"]++;
							}
							prodcuts[productID]["inventory"]--;
							return true;
						}
						return false;

					},
					removeProduct : function(productID){
						if(prodbask[productID]){ 						//якщо товар з даним айді є в корзині
							if(prodbask[productID]["count"]<=1){		//якщо він в корзині в кількості 1 шт
								//prodbask.splice(prodbask[productID],1);
								prodbask[productID]=null;
							}
							else if(prodbask[productID]["count"]>1){	//якщо кількість продукту в корзині більш 1
								prodbask[productID]["count"]--;
							}
							if(prodcuts[productID]){					//якщо вид товару не видалили зі складу то поверни одиницю товару
								prodcuts[productID]["inventory"]++;
							}
							return true;
						}
						return false;
					},
					updateProductQuantity : function(productID, quantity) {
						if(quantity>0) {
							var pcount;
								if (prodbask[productID]) {								//якщо в корзині є цей товар
									prodbask[productID]["count"] = quantity;
									pcount=quantity-prodbask[productID]["count"];
								}
								else {													//якщо в корзині ще нема цього товару
									basket.addProduct(productID);
									prodbask[productID]["count"] = quantity;
									pcount=quantity-prodbask[productID]["count"];
								}
								prodcuts[productID]["inventory"]-=pcount;

							return true;
						}
						return false;
					},
					getTotalPrice : function(){
						var sum=0;
						var str="";
						for(var i=0;i<prodbask.length;i++){
							if(prodbask[i]){
								str+=prodbask[i].prodInfo();							//метод із прототайпу)))
								sum+=prodbask[i]["count"]*prodbask[i]["price"];
							}
						}
						str+="<hr>Total price = "+sum+"";
						return str;
					}
				}
			})();

			//basket.addProduct(0);
			//basket.addProduct(1);
			//basket.addProduct(2);
			//basket.addProduct(2);
			//basket.addProduct(3);
			//basket.addProduct(3);
			//basket.addProduct(3);
			//basket.removeProduct(2);
			//basket.updateProductQuantity(3,6);
			document.write(basket.getTotalPrice());