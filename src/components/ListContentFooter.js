import "./ListContentFooter.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodoFilter } from "../store/actions/todoActions";

const ListContentFooter = (props) => {
  const { todoFilter, todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="content-footer">
      <div className="left-item">
        {todoList.filter((x) => !x.complete).length + " remain"}
      </div>
      <div
        className={`menu-item ${todoFilter === "all" ? "active" : ""}`}
        onClick={() => {
          dispatch(setTodoFilter("all"));
        }}
      >
        All
      </div>
      <div
        className={`menu-item ${todoFilter === "complete" ? "active" : ""}`}
        onClick={() => {
          dispatch(setTodoFilter("complete"));
        }}
      >
        Completed
      </div>
    </div>
  );
};
export default ListContentFooter;
