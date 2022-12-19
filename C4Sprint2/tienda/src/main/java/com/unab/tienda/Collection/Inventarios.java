package com.unab.tienda.Collection;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("Inventarios")
public class Inventarios {
    @Id
    private String id;

    @Field("cantidadStock")
    private Integer cantidadStock;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Double getPrecioVenta() {
        return precioVenta;
    }

    public void setPrecioVenta(Double precioVenta) {
        this.precioVenta = precioVenta;
    }

    @Field("cantidadMaxima")
    private Integer cantidadMaxima;

    @Field("cantidadMinima")
    private Integer cantidadMinima;

    @Field("precioCosto")
    private Double precioCosto;

    @Field("precioVenta")
    private Double precioVenta;

    @Field("estado")
    private Boolean estado;

    @DBRef
    private Productos productoId;

    public Integer getCantidadStock() {
        return cantidadStock;
    }

    public void setCantidadStock(Integer cantidadStock) {
        this.cantidadStock = cantidadStock;
    }

    public Integer getCantidadMaxima() {
        return cantidadMaxima;
    }

    public void setCantidadMaxima(Integer cantidadMaxima) {
        this.cantidadMaxima = cantidadMaxima;
    }

    public Integer getCantidadMinima() {
        return cantidadMinima;
    }

    public void setCantidadMinima(Integer cantidadMinima) {
        this.cantidadMinima = cantidadMinima;
    }

    public Double getPrecioCosto() {
        return precioCosto;
    }

    public void setPrecioCosto(Double precioCosto) {
        this.precioCosto = precioCosto;
    }

    public Boolean getEstado() {
        return estado;
    }

    public void setEstado(Boolean estado) {
        this.estado = estado;
    }

    public Productos getProductoId() {
        return productoId;
    }

    public void setProductoId(Productos productoId) {
        this.productoId = productoId;
    }
}
