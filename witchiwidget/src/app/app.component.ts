import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'at-widget-designer',
  template: `
        <color-picker [(theme)]="themeParams" (themeChange)="fireChange()"></color-picker>
    `,
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit {

    iframe: any;

    themeParams = {
        "primaryBackground": "pink",
        "primaryColor": "green",
        "fontFaces": "https://fonts.googleapis.com/css?family=Droid+Sans:400,400italic,700,700italic&subset=latin,latin-ext,cyrillic-ext,greek,greek-ext,cyrillic",
        "primaryFont": {
            "family": "Droid Sans",
            "size": 0.9,
            "unit": "em"
        },
        "primaryButton": {
            "default": {
                "color": "#fff",
                "borderColor": "rgb(153, 153, 153)",
                "backgroundColor": "rgb(183, 202, 53)"
            },
            "active": {
                "backgroundColor": "rgb(193, 212, 58)",
                "color": "#222"
            },
            "outline": {
                "backgroundColor": "transparent",
                "borderColor": "rgb(183, 202, 53)",
                "color": "rgb(183, 202, 53)"
            }
        },
        "primarySelect": {
            "backgroundColor": "#fff",
            "color": "#222",
            "font": "inherit"
        },
        "calendar": {
            "event": {
                "titleFont": {
                    "family": "Droid Sans",
                    "size": 1,
                    "unit": "em",
                    "weight": "400"
                }
            }
        },
        "headlineFont": {
            "family": "Droid Sans",
            "size": 1.1,
            "unit": "em",
            "weight": "bold"
        },
        "menu": {
            "circle": {
                "backgroundColor": "#fff",
                "borderColor": "#d5d5da",
                "color": "#d5d5da"
            },
            "label": {
                "backgroundColor": "#fff",
                "color": "#025aa5"
            },
            "done": {
                "backgroundColor": "rgb(183, 202, 53)",
                "borderColor": "rgb(123, 152, 33)",
                "color": "#222"
            },
            "outer": {
                "color": "rgb(183, 202, 53)",
                "activeColor": "rgb(123, 152, 33)"
            }
        },
        "alerts": {
            "info": {
                "backgroundColor": "#d9edf7",
                "borderColor": "#bcdff1",
                "color": "#31708f"
            },
            "warning": {
                "backgroundColor": "#fcf8e3",
                "borderColor": "#faf2cc",
                "color": "#8a6d3b"
            },
            "danger": {
                "backgroundColor": "#f2dede",
                "borderColor": "#ebcccc",
                "color": "#a94442"
            }
        },
        "divider": {
            "color": "#d5d5da"
        },
        "success": {
            "header": {
                "backgroundColor": "#0275d8",
                "color": "#eee"
            }
        },
        "fullscreen": {
            "backgroundColor": "rgba(183, 202, 53, .8)"
        },
        "spinner": {
            "backgroundColor": "rgb(183, 202, 53)"
        }
    };

    ngAfterViewInit(): void {
        this.iframe = document.getElementById('at-widget-frame');
    }

    fireChange(): void {
        this.generateThemeStylings();
    }

    generateThemeStylings(): void {
        const stylings = `
            .at-widget {
                background-color: ${this.themeParams.primaryBackground};
                color: ${this.themeParams.primaryColor};
            }
        `;

        // Triggers Cross Origin error (because we are using the iframe from a different domain)
        this.iframe.contentWindow.write(stylings);
    }

}



