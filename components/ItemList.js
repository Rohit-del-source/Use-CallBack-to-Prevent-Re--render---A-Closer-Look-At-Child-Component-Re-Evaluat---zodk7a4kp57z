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
    const [items, setItems] = React.useState([]);
    const [message, setMessage] = useState("");

    const addItem = useCallback(() => {
        setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
        setMessage("Item added successfully!");

        // Clear the message after 3 seconds
        const timeoutId = setTimeout(() => {
            setMessage("");
        }, 3000);

        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div>
           
            <button onClick={addItem}>Add Item</button>
            <p>{message}</p>
            <ItemList items={items} />
        </div>
    );
};

export default IndexPage;
