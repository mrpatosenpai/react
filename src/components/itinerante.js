import React from "react";
import Card from "./Card";

const Iterador = ({ chao }) => {
    return (
      <React.Fragment>
        {chao ? (
          chao.length > 0 ? (
            chao.map((chaoItem) => (
              <Card
                key={chaoItem.id}
                {...chaoItem}
              />
            ))
          ) : (
            <p>No hay datos disponibles</p>
          )
        ) : (
          <p>Cargando...</p>
        )}
      </React.Fragment>
    );
  };

export default  Iterador