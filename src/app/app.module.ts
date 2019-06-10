import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ContentComponent } from "./components/content/content.component";
import { NavigationTabComponent } from "./components/navigation-tab/navigation-tab.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    NavigationTabComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
