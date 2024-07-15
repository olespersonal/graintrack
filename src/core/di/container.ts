import { container } from "tsyringe";
import { authService } from "../services/authService";

container.register("AuthService", { useValue: authService });
