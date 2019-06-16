import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ContentComponent } from "./components/content/content.component";
import { NavigationTabComponent } from "./components/navigation-tab/navigation-tab.component";
import { HomeComponent } from "./home/home.component";
import { AnalystComponent } from "./analyst/analyst.component";
import { ForecastComponent } from "./forecast/forecast.component";
import { FunnelComponent } from "./funnel/funnel.component";
import { CoachComponent } from "./coach/coach.component";
import { ReportingComponent } from "./reporting/reporting.component";
import { SettingsComponent } from "./settings/settings.component";
import { HelpComponent } from "./help/help.component";
import { ForecastSummaryComponent } from "./forecast/forecast-summary/forecast-summary.component";
import { FutureForecastComponent } from "./forecast/future-forecast/future-forecast.component";
import { ForecastWorksheetComponent } from "./forecast/forecast-worksheet/forecast-worksheet.component";

import { MatTabsModule } from "@angular/material";
import { MyForecaseComponent } from "./forecast/forecast-summary/my-forecast/my-forecast.component";
import { TeamForecastComponent } from "./forecast/forecast-summary/team-forecast/team-forecast.component";

import {
  MatSelectModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatProgressBarModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    NavigationTabComponent,
    HomeComponent,
    AnalystComponent,
    ForecastComponent,
    FunnelComponent,
    CoachComponent,
    ReportingComponent,
    SettingsComponent,
    HelpComponent,
    ForecastSummaryComponent,
    FutureForecastComponent,
    ForecastWorksheetComponent,
    MyForecaseComponent,
    TeamForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
