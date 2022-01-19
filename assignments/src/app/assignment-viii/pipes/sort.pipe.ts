import { Pipe, PipeTransform } from "@angular/core";

type Order = "asc" | "desc";

@Pipe({ name: "sort" })
export class Sort implements PipeTransform {
  transform(values: any[], property?: string, order: Order = "asc") {
    if (values && this.isObject(values[0])) {

      if (!property) {
        throw Error("No property specified for sorting");
      }

      return this.sortObjects(values, property, order);
    }

    return this.sortPrimitives(values, order);
  }

  private sortPrimitives(values: string[] | boolean[] | number[], order: Order): any[] {
    return values.sort((a: any, b: any) => {
      return this.sort(a, b, order);
    });
  }

  private sortObjects(values: Object[], prop: string, order: Order): any[] {
    if (values && !this.propertyExists(values[0], prop)) {
      throw Error(`Invalid property for sorting: ${prop}`);
    }

    return values.sort((a: any, b: any) => {
      return this.sort(a[prop], b[prop], order);
    });
  }

  private propertyExists<X extends {}, Y extends PropertyKey> (obj: X, prop: Y): obj is X & Record<Y, unknown> {
    return prop in obj;
  }

  private isObject(value: any): value is Object {
    return typeof value === "object";
  }

  private sort(a: any, b: any, order: Order) {
    if (a < b) {
      return order === 'asc' ? -1 : 1;
    }

    if (a > b) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  }

}