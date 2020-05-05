<?php

namespace App\Controllers;

use Models\Cost;
use Models\Linet;
use Services\Request;
use Repositories\ColorRepository;

class ColorController
{
	public static $repository; 

	private static function setRepository()
	{
		$colorRepository = new ColorRepository();
		self::$repository = $colorRepository;
	}

	public static function getColors($vars = [])
	{
		self::setRepository();
		return $colors = self::$repository->getAll();
	}

	public static function getColor($vars = [])
	{
		self::setRepository();
		$hexcode = $vars['hexcode'] ?? '';
		$color = self::$repository->getOne($hexcode);
		return $color;
	}

	public static function addColor($vars = [])
	{
		$hexcode   =  $_POST['hexcode'] ?? '';
		$family    =  $_POST['family'] ?? '';
		$colorName =  $_POST['name'] ?? '';
		if (empty($hexcode) || empty($family) || empty($colorName)) {
			return ['error' => 'Please supply hexcode, name and family to make a successful request'];
		}
		self::setRepository();
		$color = self::$repository->add([
			'hexcode' 	=>  $hexcode,
			'name' 		=>  $colorName, 
			'family'	=>	$family]);
		return $color;
	}

	public static function editColor($vars = [])
	{
		$hexcode = $vars['hexcode'] ?? '';
		$family = $_POST['family'] ?? '';
		$name = $_POST['name'] ?? '';
		self::setRepository();
		$color = self::$repository->getOne($hexcode);
		if (!$color) {
			return ['error' => 'Color with hexcode does not exist'];
		}

		$updated = self::$repository->update($hexcode, ['family' => $family, 'name' => $name]);
		return self::$repository->getOne($hexcode);
	}

	public static function removeColor($vars = [])
	{
		self::setRepository();
		$hexcode = $vars['hexcode'] ?? '';
		$color = self::$repository->getOne($hexcode);
		if (!$color) {
			return ['error' => 'Could not delete color. Color Not Found'];
		}
		self::$repository->delete($hexcode);
		return ['data' => 'The color has been removed'];
	}

	public static function getColorFromApi($vars = [])
	{
		$hexcode = $vars['hexcode'] ?? '';
		$request = new Request(COLOR_API);
		$response = $request->get('id', ['hex' => $hexcode]);
		return $response;

	}
}