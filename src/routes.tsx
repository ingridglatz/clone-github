import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { SignIn } from './pages/sign-in';
import { Home } from './pages/home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<Home />} />
    </Route>,
  ),
);
