import "./ListContent.css"
import React, { useEffect, useState } from 'react';
import ListItem from "./ListItem";
import ListContentFooter from "./ListContentFooter";
import { useSelector } from "react-redux";

const ListContent = () => {

    const { todoList, todoFilter } = useSelector((state) => state.todo)
    const [list, setList] = useState([])

    useEffect(() => {
        if (todoFilter === "all") {
            setList(todoList)
            return
        }
        setList(todoList.filter((x) => x.complete))
    })
    
    return (
        <div className="item-content-wrapper">
            <div className="content">

                {list.length<1 && <div className="text-xs text-gray-700 font-bold">there is no element yet</div>}
                {list.map((x) => {
                    return (
                        <ListItem 
                            key={x.id}
                            item={x}
                            className={x.complete?"completed":""}
                        />
                    )
                })}
            </div>
            <ListContentFooter></ListContentFooter>
        </div>
    )
}
export default ListContent