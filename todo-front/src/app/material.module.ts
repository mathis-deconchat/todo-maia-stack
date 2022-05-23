import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';






@NgModule({
    exports: [
        MatCardModule,
        MatButtonModule,
        DragDropModule,
        MatFormFieldModule,
        MatInputModule, MatSelectModule,]
})
export class MaterialComponents {

}
