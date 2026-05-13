<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema Académico CRUD</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f6fb;
            margin: 0;
            padding: 0;
        }

        .navbar {
            background: white;
            padding: 18px;
            margin: 20px auto;
            width: 85%;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            display: flex;
            justify-content: center;
            gap: 40px;
            font-weight: bold;
            color: #2d4c9b;
        }

        .container {
            width: 85%;
            margin: auto;
        }

        h2 {
            color: #2d4c9b;
            margin-top: 35px;
        }

        .btn-add {
            background: #1677ff;
            color: white;
            padding: 10px 18px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            margin-bottom: 15px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            margin-bottom: 35px;
        }

        th, td {
            padding: 12px;
            text-align: center;
            font-size: 14px;
            border-bottom: 1px solid #eee;
        }

        th {
            background: #f8f9fc;
            color: #555;
        }

        .btn-edit {
            background: #ffc107;
            color: white;
            border: none;
            padding: 7px 12px;
            border-radius: 6px;
            cursor: pointer;
        }

        .btn-delete {
            background: #dc3545;
            color: white;
            border: none;
            padding: 7px 12px;
            border-radius: 6px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <div class="navbar">
        <span>Dashboard</span>
        <span> Gestión</span>
        <span> Cerrar sesión</span>
    </div>

    <div class="container">

        <!-- TABLA ALUMNOS -->
        <h2>Tabla de Alumnos</h2>
        <button class="btn-add">Agregar Alumno</button>
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha Nacimiento</th>
                <th>DNI</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Estado Matrícula</th>
                <th>Acciones</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Juan</td>
                <td>Pérez</td>
                <td>2005-04-10</td>
                <td>12345678</td>
                <td>Lima</td>
                <td>987654321</td>
                <td>juan@email.com</td>
                <td>Activo</td>
                <td>
                    <button class="btn-edit">Editar</button>
                    <button class="btn-delete">Eliminar</button>
                </td>
            </tr>
        </table>

        <!-- TABLA CURSOS -->
        <h2>Tabla de Cursos</h2>
        <button class="btn-add">Agregar Curso</button>
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre Curso</th>
                <th>Código</th>
                <th>Créditos</th>
                <th>Descripción</th>
                <th>Acciones</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Base de Datos</td>
                <td>BD101</td>
                <td>4</td>
                <td>Introducción a SQL y modelado</td>
                <td>
                    <button class="btn-edit">Editar</button>
                    <button class="btn-delete">Eliminar</button>
                </td>
            </tr>
        </table>

        <!-- TABLA PROFESORES -->
        <!-- TABLA PROFESORES -->
        <h2>Tabla de Profesores</h2>
        <button class="btn-add">Agregar Profesor</button>
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Especialidad</th>
                <th>Acciones</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Carlos</td>
                <td>Ramírez</td>
                <td>Programación</td>
                <td>
                    <button class="btn-edit">Editar</button>
                    <button class="btn-delete">Eliminar</button>
                </td>
            </tr>
        </table>

    </div>

</body>
</html>