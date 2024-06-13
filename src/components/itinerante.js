import React from "react";
import Card from "./Card";

const Iterador = ({chao}) => {
    return (
        <div>
            {chao.length > 0 ? (
                chao.map((chaoItem) => (
                    <Card
                        key={chaoItem.id}
                        nombre={chaoItem.nombre}
                        descripcion={chaoItem.descripcion}
                        img={chaoItem.img}
                    />
                ))
            ) : (
                <p>No hay datos disponibles</p>
            )}
        </div>
    );
};

export default  Iterador