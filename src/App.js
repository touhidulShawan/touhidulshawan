import React from "react";

// import { Switch, Route, Redirect } from "react-router-dom";

// import Home from "./containers/home/Home";
// import Projects from "./containers/projects/Projects";
// import Skills from "./containers/skills/Skills";
// import Reviews from "./containers/client-reviews/ClientReviews";
// import Page404 from "./components/404/Page404";
// import { ThemeProvider } from "./context/useThemeContext";

// const App = () => {
//   return (
//     <ThemeProvider>
//       <Switch>
//         <Route path="/" exact>
//           <Home />
//         </Route>
//         <Route path="/projects" exact>
//           <Projects />
//         </Route>
//         <Route path="/skills" exact>
//           <Skills />
//         </Route>
//         <Route path="/reviews" exact>
//           <Reviews />
//         </Route>
//         <Route path="/page-not-found">
//           <Page404 />
//         </Route>
//         <Redirect to="/page-not-found" />
//       </Switch>
//     </ThemeProvider>
//   );
// };

const App = () => (window.location.href = "https://touhidulshawan.vercel.app/");

export default App;
