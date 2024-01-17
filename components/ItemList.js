import React, { useState, useCallback, useEffect } from 'react';

function ItemList({ items }) {
    console.log("ItemList rendered!"); // DO NOT EDIT THIS LINE

    return (
        <ul>
            {items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
    );
}

const IndexPage = () => {
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState("");

    const addItem = useCallback(() => {
        setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
        setMessage("Item added successfully!");
    }, []);

    useEffect(() => {
        if (message) {
            const timeoutId = setTimeout(() => {
                setMessage("");
            }, 3000);

            return () => clearTimeout(timeoutId);
        }
    }, [message]);

    return (
        <div>
           
            <button onClick={addItem}>Add Item</button>
           
            <ItemList items={items} />
            <p>{message}</p>
        </div>
    );
};

export default IndexPage;
