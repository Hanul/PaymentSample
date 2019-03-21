PaymentSample.MAIN = METHOD({

	run : (params) => {
		
		const CURRENCY = 'USD';
		
		DIV({
			c : [H1({
				style : {
					color : '#999',
					fontSize : 20
				},
				c : 'Payment 샘플'
			}), A({
				c : '결제 요청',
				on : {
					tap : () => {
						
						let price = 0.1;
						
						new PaymentRequest([{
							supportedMethods : ['basic-card']
						}], {
							total : {
								label : 'Item',
								amount : {
									currency : CURRENCY,
									value : price
								}
							}
						}).show();
					}
				}
			})]
		}).appendTo(BODY);
	}
});
