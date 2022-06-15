import React from "react";

class Formulario extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="task">
                        <input 
                        type="text"
                        name="task"
                        id="task"
                        placeholder="nome da task"
                        required
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="tempo">
                        <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                        />
                    </label>
                </div>
            </form>
        )
    }
}
export default Formulario;