// import EditTask from './EditTask';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import { deleteTask } from '../features/taskSlice';
// import { useDispatch, useSelector } from 'react-redux';

// const Cards = () => {
//     const dispatch = useDispatch();
//     const searchQuery = useSelector((state) => state.tasks.searchQuery);
//     const filter = useSelector((state) => state.tasks.filter);
//     const tasks = useSelector((state) => state.tasks.tasks);

//     const handleDelete = (id) => {
//         dispatch(deleteTask(id));
//     };

//     const filteredTasks = tasks.filter((task) => {
//         return (
//             (filter === "All" || task.status === filter) &&
//             task.title.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//     });

//     return (
//         <Grid container spacing={2} sx={{ mt: 2 }} style={{ justifyContent: "center"}}>
//             {filteredTasks.map((task) => (
//                 <Grid item xs={12} sm={6} md={4} lg={3} key={task.id}>
//                     <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 300, height: 250, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
//                         <CardContent>
//                             <Typography variant="h5" component="div">
//                                 {task.title}
//                             </Typography>
//                             {task.description && (
//                                 <Typography variant="body2" color="text.secondary"
//                                 sx={{
//                                     display: "-webkit-box",
//                                     WebkitBoxOrient: "vertical",
//                                     WebkitLineClamp: 3, // Limit to 3 lines
//                                     overflow: "hidden",
//                                     textOverflow: "ellipsis",
//                                 }}
//                                 >
//                                     {task.description}
//                                 </Typography>
//                             )}
//                             <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
//                                 Status: <span style={{ fontStyle: "italic", textDecoration: "underline" }}>{task.status}</span>
//                             </Typography>
//                         </CardContent>
//                         <CardContent sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
//                             <EditTask task={task} />
//                             <Button
//                                 variant="contained"
//                                 color="error"
//                                 onClick={() => handleDelete(task.id)}
//                             >
//                                 Delete
//                             </Button>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             ))}
//         </Grid>
//     );
// };

// export default Cards;


import EditTask from "./EditTask";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { deleteTask } from "../features/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../features/Store";

// Define TypeScript interface for task
interface Task {
  id: number;
  title: string;
  description?: string;
  status: "To Do" | "Pending" | "Completed";
}

const Cards: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.tasks.searchQuery);
  const filter = useSelector((state: RootState) => state.tasks.filter);
  const tasks = useSelector((state: RootState) => state.tasks.tasks) as Task[];

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      (filter === "All" || task.status === filter) &&
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Grid container spacing={2} sx={{ mt: 2 }} style={{ justifyContent: "center" }}>
      {filteredTasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={task.id}>
          <Card
            variant="outlined"
            sx={{
              minWidth: 275,
              maxWidth: 300,
              height: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {task.title}
              </Typography>
              {task.description && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3, // Limit to 3 lines
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {task.description}
                </Typography>
              )}
              <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
                Status:{" "}
                <span style={{ fontStyle: "italic", textDecoration: "underline" }}>
                  {task.status}
                </span>
              </Typography>
            </CardContent>
            <CardContent sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
              <EditTask task={task} />
              <Button variant="contained" color="error" onClick={() => handleDelete(task.id)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
