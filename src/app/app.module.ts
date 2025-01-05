import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { UsersComponent } from "./component/users/users.component";
import { FooterComponent } from "./component/footer/footer.component";
import { TaskModule } from "./modules/task.module";


@NgModule({
    declarations:[AppComponent,HeaderComponent, UsersComponent, FooterComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,TaskModule]
})
export class AppModule{}