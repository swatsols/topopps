import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AnalystComponent } from "./analyst/analyst.component";
import { FunnelComponent } from "./funnel/funnel.component";
import { ForecastComponent } from "./forecast/forecast.component";
import { CoachComponent } from "./coach/coach.component";
import { ReportingComponent } from "./reporting/reporting.component";
import { SettingsComponent } from "./settings/settings.component";
import { HelpComponent } from "./help/help.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "analyst",
    component: AnalystComponent
  },
  {
    path: "funnel",
    component: FunnelComponent
  },
  {
    path: "forecast",
    component: ForecastComponent
  },
  {
    path: "coach",
    component: CoachComponent
  },
  {
    path: "reporting",
    component: ReportingComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "help",
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
