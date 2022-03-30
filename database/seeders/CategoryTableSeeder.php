<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category')->insert(
            [
                'name_ru' => 'Вертушки и Блесны',
                'name_en' => 'vertyshki_blesni',
            ]
        );
        DB::table('category')->insert(
            [
                'name_ru' => 'Воблеры',
                'name_en' => 'vobleri',
            ]
        );
        DB::table('category')->insert(
            [
                'name_ru' => 'Грузики и Кормушки',
                'name_en' => 'gryziki_kormyshki',
            ]
        );
        DB::table('category')->insert(
            [
                'name_ru' => 'Живая приманка',
                'name_en' => 'jivaya_primanka',
            ]
        );
        DB::table('category')->insert(
            [
                'name_ru' => 'Катушки',
                'name_en' => 'Katyshki',
            ]
        );
        DB::table('category')->insert(
            [
                'name_ru' => 'Крючки',
                'name_en' => 'krychki',
            ]
        );
        DB::table('category')->insert(
            [
                'name_ru' => 'Кемпинговая мебель',
                'name_en' => 'kempingovaya_mebel',
            ]
        );
        DB::table('category')->insert(
            [
                'name_ru' => 'Поплавки',
                'name_en' => 'poplavki',
            ]
        );
        DB::table('category')->insert(
            [
                'name_ru' => 'Экипировка',
                'name_en' => 'ekipirovka',
            ]
        );

        DB::table('category')->insert(
            [
                'name_ru' => 'Прикорм, Бойлы, Ароматизаторы',
                'name_en' => 'prikorm_boyli_aromatizatori',
            ]
        );
    }
}
