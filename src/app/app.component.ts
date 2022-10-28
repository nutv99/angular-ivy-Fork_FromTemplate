import { Component, VERSION, OnInit } from '@angular/core';
import $ from 'jquery';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//<i class="fa-solid fa-chevrons-right"></i>

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isJqueryWorking: string;
  filmIcon = faFilm;
  faChevronCircleRight = faChevronCircleRight;
  faHamburger = faBars;

  menu = [
    {
      HeadCaption: 'ฐานข้อมูลหลัก',
      Child: [
        {
          name: 'Deparment',
          linkTo: '/department',
          caption: 'แผนกสินค้า',
        },
        {
          name: 'category',
          linkTo: '/category',
          caption: 'หมวดสินค้า',
        },
        {
          name: 'groupItem',
          linkTo: '/',
          caption: 'กลุ่มสินค้า',
        },
      ],
    },
    {
      HeadCaption: 'ฐานข้อมูลTrans',
      Child: [
        {
          name: 'DeparmentTrans',
          linkTo: '/department',
          caption: 'A-แผนกสินค้า',
        },
        {
          name: 'categoryTrans',
          linkTo: '/category',
          caption: 'A-หมวดสินค้า',
        },
        {
          name: 'groupItemTrans',
          linkTo: '/',
          caption: 'A-กลุ่มสินค้า',
        },
      ],
    },
    {
      HeadCaption: 'ระบบรายงาน',
      Child: [
        {
          name: 'DeparmentTrans',
          linkTo: '/',
          caption: 'A-แผนกสินค้า',
        },
        {
          name: 'categoryTrans',
          linkTo: '/',
          caption: 'A-หมวดสินค้า',
        },
        {
          name: 'groupItemTrans',
          linkTo: '/',
          caption: 'A-กลุ่มสินค้า',
        },
      ],
    },
  ];

  ngOnInit() {
    $(document).ready(() => {
      this.isJqueryWorking = 'Jquery is working 9999!!!';
      // $('#testdiv').html('sssss');
    });
  }

  ToggleSideBar() {
    //$('#testdiv').html('99999');
    // if (!$("#testdiv").hasClass('myBorder')) {
    //   $("#testdiv").addClass('myBorder')
    // } else {
    //   $("#testdiv").removeClass('myBorder').addClass('myBorder2')
    // }
    //$('#testdiv').toggleClass('collapsed') ;
    //$('#testdiv').toggleClass('collapsed');
    $('#sidemenu').toggleClass('nodisplay');
    $('#workarea').toggleClass('col-sm-12');
    //workarea

    // document.querySelector('button').addEventListener('click', () => { document.querySelector('.collapsible').classList.toggle('collapsed');});
  }

  HideMenu(id: string) {
    $('#' + id).animate(
      {
        height: 'toggle',
      },
      500,
      function () {
        // Animation complete.
      }
    );
  }
}
