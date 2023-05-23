import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (item) => item.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((item) =>
            item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    return [
        ...cartItems,
        {
            ...productToAdd,
            quantity: 1,
        },
    ];
};

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (item) => item.id === productToRemove.id
    );
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((item) => item.id !== productToRemove.id);
    }

    return cartItems.map((item) =>
        item.id === productToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
    );
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce((sum, item) => {
            return sum + item.quantity;
        }, 0);
        setCartCount(total);
    }, [cartItems]);

    useEffect(() => {
        const total = cartItems.reduce((sum, item) => {
            return sum + item.quantity * item.price;
        }, 0);
        setCartTotal(total);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    };

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
        cartCount,
        cartTotal,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
