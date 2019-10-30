(()=>{

	const gallons_gas_per_tank = prompt("Enter gallons of gas per tank");//10;
	const tanks_per_year = prompt(`Enter tanks of gas per year`);//38;

	const LBS_CARBON_PER_GALLON = 20;
	const LBS_CARBON_CONSUMED_PER_TREE = 48;
	const TREE_SPACING = 8;

	// start math

	const gallons_per_year = gallons_gas_per_tank * tanks_per_year;

	const lbs_carbon_made_per_year = gallons_per_year*LBS_CARBON_PER_GALLON;

	const trees_needed = lbs_carbon_made_per_year/LBS_CARBON_CONSUMED_PER_TREE;

// 	const 

    const to_return = {
		trees_needed,
    };
    
    console.log(to_return);
    alert(JSON.stringify(to_return));

	return to_return;
	
})()