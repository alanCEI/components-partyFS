function StudentCard({ student }) {
  return (
    <div className="student-card">
      <img
        src={student.foto}
        alt={`Foto de ${student.nombre}`}
        className="student-photo"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/280x200/e1e1e1/333?text=Sin+Imagen";
        }}
      />
      <div className="student-info">
        <h3>{student.nombre}</h3>
        <p>
          <strong>Edad:</strong> {student.edad}
        </p>
        <p>
          <strong>Carrera:</strong> {student.carrera}
        </p>
      </div>
    </div>
  );
}

export default StudentCard;
