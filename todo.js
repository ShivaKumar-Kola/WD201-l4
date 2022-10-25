const todoList = () => {
    let dateToday = new Date();
    const today = formattedDate(dateToday);
    let all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      return all.filter((todo) => {
        return todo.dueDate < today;
      });
    };
  
    const dueToday = () => {
      return all.filter((todo) => {
        return todo.dueDate === today;
      });
    };
  
    const dueLater = () => {
      return all.filter((todo) => {
        return todo.dueDate > today;
      });
    };
  
    // eslint-disable-next-line no-unused-vars
    const toDisplayableList = (list) => {
      return list
        .map((todo) => {
          return `[${todo.completed ? "x" : " "}] ${todo.title} ${
            todo.dueDate !== today ? todo.dueDate : " "
          }`.trim();
        })
        .join("\n");
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
    };
  };
  
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };
  
  module.exports = todoList;