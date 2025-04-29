import { useState } from "react";
import { Modal, Button, Carousel, Card } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { DiMsqlServer } from "react-icons/di";

interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  imagenes: string[];
  herramientas: string[];
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Sistema de Información Del Sector Agroalimenticio",
    descripcion: "Plataforma para registrar fichas de productores, gestionar información relevante del sector agroalimentario y apoyar en la toma de decisiones. Incluye contenidos informativos y fichas dinámicas personalizables",
    imagenes: [
      "/img/SAG1.png",
      "/img/SAG2.png",
      "/img/SAG3.png",
      "/img/SAG4.png",
      "/img/SAG5.png",
      "/img/SAG6.png",
    ],
    herramientas: ["react", "bootstrap", "php", "mysql"],
  },
  {
    id: 2,
    titulo: "Sistema de Gestión y Control",
    descripcion: "Sistema para registrar y controlar horas de participación estudiantil. Permite crear actividades, suscripciones por parte de estudiantes y asistencia con escaneo de códigos QR.",
    imagenes: [
      "/img/SGC1.png",
      "/img/SGC2.png",
      "/img/SGC3.png",
      "/img/SGC4.png",
      "/img/SGC5.png",
    ],
    herramientas: ["react", "node", "mysql"],
  },
  {
    id: 3,
    titulo: "Sistema de Facturación",
    descripcion: "Aplicación para gestionar ventas, clientes y productos de un negocio. Generación automática de facturas y reportes para control administrativo.",
    imagenes: ["/img/SF1.png", "/img/SF2.png", "/img/SF3.png", "/img/SF4.png"],
    herramientas: ["react", "node", "sqlserver"],
  },
];

type IconTypes = {
  nombre: string;
};

const IconoTecnologia = ({ nombre }: IconTypes) => {
  const iconStyle = {
    fontSize: "2rem",
    margin: "0 auto",
    color: "#61dafb", // color para React, podés variarlo según el ícono
  };

  switch (nombre.toLowerCase()) {
    case "react":
      return (
        <FaReact title="React" style={{ ...iconStyle, color: "#61dafb" }} />
      );
    case "node":
      return (
        <FaNodeJs title="Node.js" style={{ ...iconStyle, color: "#68a063" }} />
      );
    case "mysql":
      return (
        <SiMysql title="MySQL" style={{ ...iconStyle, color: "#00758f" }} />
      );
    case "php":
      return <SiPhp title="Php" style={{ ...iconStyle, color: "#777BB4" }} />;
    case "bootstrap":
      return (
        <FaBootstrap title="Php" style={{ ...iconStyle, color: "#7952B3" }} />
      );
    case "sqlserver":
      return (
        <DiMsqlServer title="SqlServer" style={{ ...iconStyle, color: "#CC2927" }} />
      );
    default:
      return (
        <span style={{ ...iconStyle, fontSize: "1rem", color: "#ccc" }}>
          {nombre}
        </span>
      );
  }
};

const Proyectos = () => {
  const [proyectoActivo, setProyectoActivo] = useState<Proyecto | null>(null);
  const [show, setShow] = useState(false);

  const handleOpen = (proyecto: Proyecto) => {
    setProyectoActivo(proyecto);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setProyectoActivo(null);
  };

  return (
    <section className="proyectos" id="proyectos">
      <h2 className="text-white">Proyectos</h2>
      <div className="project-grid">
        {proyectos.map((proy) => (
          <Card
            key={proy.id}
            className="text-white project-card d-flex flex-column">
            <Card.Img variant="top" src={proy.imagenes[0]} />
            <Card.Body className="d-flex flex-column justify-content-between flex-grow-1">
              <div>
                <Card.Title style={{ fontSize: "18px" }}>
                  {proy.titulo}
                </Card.Title>
                <Card.Text>{proy.descripcion}</Card.Text>
              </div>
            </Card.Body>
            <div className="d-flex align-items-center flex-wrap mb-2">
              {proy.herramientas.map((tech, i) => (
                <IconoTecnologia nombre={tech} key={i} />
              ))}
            </div>
            <Button
              style={{ backgroundColor: "#6443c5", border: "none" }}
              onClick={() => handleOpen(proy)}>
              Ver galería
            </Button>
          </Card>
        ))}
      </div>

      {/* Modal con carrusel */}
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        centered
        contentClassName="bg-dark border-0" // Esto hace oscuro el fondo y sin bordes
      >
        <Modal.Body className="p-0">
          <Carousel>
            {proyectoActivo?.imagenes.map((img, i) => (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt={`Imagen ${i + 1}`}
                  style={{ maxHeight: "80vh", objectFit: "contain" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Proyectos;
