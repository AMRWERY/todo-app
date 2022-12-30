  <template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Todo App</h1>
                <h3 class="name">
                    What's Up : <input v-model.trim="name" type="text" class="form-control" placeholder="name">
                </h3>
                <form @submit.prevent="addNewTodo">
                    <label>New Todo: </label>
                    <input v-model="newTodo" type="text" class="form-control" placeholder="new todo">
                    <button @click="addNewTodo" type="button" class="btn btn-outline-primary">Add Todo</button>
                    <button @click="markAllDone" type="button" class="btn btn-outline-danger">Mark All Done</button>
                    <button @click="removeAll" type="button" class="btn btn-outline-success">Remove All</button>
                  </form>
                  <ul>
                    <li v-for="(todo) in todos" :key="todo" class="don">
                    <div class="card">
                     <input @click="toggleDone(todo)" type="checkbox" class="checkbox"> <h3 :class="{done: todo.done}">{{ todo.content }}
                     </h3>
                    </div>
                      <button @click="removeTodo(todo)" type="button" class="btn btn-outline-success">Remove Todo</button>
                    </li>
                  </ul>
            </div>
        </div>
    </div>
  </template>

  <script>
  import { ref, watch, onMounted } from 'vue';
  
  export default {
    name: 'App',
  
    setup() {
      const newTodo = ref('');
      const todos = ref([]);
      const name = ref('');

      watch(name, (newValue) => {
        localStorage.setItem('name', newValue)
      })

      onMounted(() => {
        name.value = localStorage.getItem('name') 
      })
  
      function addNewTodo() {
        todos.value.push({
          done: false,
          content: newTodo.value
        })
  
        newTodo.value = '';
    }

      watch(todos, newValue => {
        localStorage.setItem('todos', JSON.stringify(newValue))
      }, { deep: true })
  
      function toggleDone(todo) {
        todo.done = !todo.done
      }
  
      function removeTodo(todo) {
        todos.value.splice(todo, 1)
      }
  
      function markAllDone() {
        todos.value.forEach((todo) => todo.done = true);
      }
  
      function removeAll() {
        todos.value = []
      }
  
      return {
        name,
        newTodo,
        todos,
        addNewTodo,
        toggleDone,
        removeTodo,
        markAllDone,
        removeAll
      }
    }
  }
  </script>

  <style scoped>
  * {
    text-align: center;
  }

  .name {
    width: 50%;
    display: -webkit-inline-box;
  }

  h1 {
    text-shadow: 2px 2px black;
    color: red;
  }
  
    .container {
       display: flex;
       align-items: stretch;
       justify-content: space-around;
       padding: 50px 0;
    }

    label {
        color: blue;
    }

    input {
        margin: 10px;
        box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
    }

    .form-control {
        width: 50% !important;
        display: initial !important;
        margin-top: 30px;
      }

      .btn {
        margin: 7px;
      }

      .btn-outline-warning {
        display: initial;
      }

      .done {
        text-decoration: line-through;
        color: red;
      }

      li {
        list-style: none;
        color: #810CA8;
      }

      .card {
        display: inline-block;
        align-items: center;
        justify-content: center;
        width: 18rem;
        box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
        margin: 17px;
      }
      
      .don {
        cursor: pointer;
      }

      .checkbox {
        display: block;
        position: absolute;
      }
  </style>
  