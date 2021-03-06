import { SpaEquipment } from '../../equipment/spa-equipment.model';
import { CartActionTypes, CartActions } from './cart.actions';

export interface CartState {
    items: SpaEquipment[];
    cartTotal: number;
    itemQuantity: number;
}

const initialCartState: CartState = {
    items: [],
    cartTotal: 0,
    itemQuantity: 0
};

export function cartReducer(state = initialCartState, action: CartActions): CartState {
    switch (action.type) {
        case CartActionTypes.AddItemActionType:
            const isItemWasAdded = state.items.find(i => i.id === action.payload.id) ? true : false;
            if (isItemWasAdded) {
                const item = state.items.find(i => i.id === action.payload.id);
                item.quantity++;
                return {
                    ...state,
                    items: [...state.items]
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, action.payload]
                };
            }
        case CartActionTypes.DeleteItemActionType:
            const index = state.items.findIndex(i => i.id === action.payload);
            state.items.splice(index, 1);
            const cartItems = [...state.items];
            return {
                ...state,
                items: cartItems
            };
        case CartActionTypes.CalculateCartTotalActionType:
            return {
                ...state,
                items: [...state.items],
                cartTotal: action.payload
            };
        default:
            return state;
    }
}
