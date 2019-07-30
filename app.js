const app = new Vue({
    el: '#app',
    data: {
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea() {
            if (!this.nuevaTarea.trim() == '') {
                this.tareas.push({
                    nombre: this.nuevaTarea,
                    estado: false
                });
            }
            this.nuevaTarea = '';

            setLocalStorage(this);
        },
        cambiarEstado(index) {
            this.tareas[index].estado = !this.estado;

            setLocalStorage(this);
        },
        eliminarTarea(index) {
            this.tareas.splice(index, 1);

            setLocalStorage(this);
        }
    },
    created() {
        const datosDB = JSON.parse(localStorage.getItem('todo-vue'));

        if (datosDB === null) {
            this.tareas = [];
        } else {
            this.tareas = datosDB;
        }
    }
});

function setLocalStorage(element) {
    localStorage.setItem('todo-vue', JSON.stringify(element.tareas));
}