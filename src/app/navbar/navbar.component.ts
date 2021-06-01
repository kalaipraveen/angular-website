export interface NavItem {
    // Navigation link
    href: string;
    // Navigation Label
    label: string;
    // Status of Navigation Item
    active: boolean;
}


import { Component } from '@angular/core';
@Component({
    selector: 'db-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    // App name
    appName: string = 'Dream Bean';
    // Navgation items
    navItems: NavItem[] = [
        { href: 'welcome', label: 'Home', active: true },
        { href: 'products', label: 'Products', active: false },
        { href: 'checkout', label: 'Checkout', active: false },
       // { href: '#', label: 'Sign out', active: false }
    ];
}
