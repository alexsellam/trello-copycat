const initialState = [
    {
      title: "Done",
      id: 0, 
      cards : [
          {
              id: 0, 
              text: "text test 1 ABC"
          },
          {
              id: 1, 
              text: "text test 2 DEF"
          }

      ]
    },
    {
        title: "Todo",
        id: 0, 
        cards : [
            {
                id: 0, 
                text: "call Alex"
            },
            {
                id: 1, 
                text: "email Alex"
            }
  
        ]
      }   
]

const listsReducer = (state = initialState, action) => {
    switch(action.type){
        default: 
        return state; 
    }
}

export default listsReducer;