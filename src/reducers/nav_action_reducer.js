const initialState = {
	isfilterActive: false,
};

const navActionReducer = (state = initialState, action) => {  
	switch (action.type) {
		case 'FILTER_CLICKED':
				
			return {
        isfilterActive: !state.isfilterActive,
      };

		default:
			return state;
	}
}

export default navActionReducer;