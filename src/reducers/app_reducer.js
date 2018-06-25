const initialState = {
	isMenuClicked: false,
};

const appReducer = (state = initialState, action) => {  
	switch (action.type) {
		case 'MENU_CLICKED':
		
			return {
        isMenuClicked: !state.isMenuClicked,
      };

		default:
			return state;
	}
}

export default appReducer;