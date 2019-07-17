<?php

class Voiture
{
    private $immatriculation;
    private $couleur;
    private $poids;
    private $puissance;
    private $reservoir;
    private $essence;
    private $place;
    private $assure;
    private $message;

    public function __construct($immatriculation, $couleur, $poids, $puissance, $reservoir, $place)
    {
        $this->immatriculation = $immatriculation;
        $this->couleur = $couleur;
        $this->poids = $poids;
        $this->puissance = $puissance;
        $this->reservoir = $reservoir;
        $this->place = $place;
        $this->essence = 5.0;
        $this->assure = false;
        $this->message = 'Bienvenue';
    }

    public function immatriculation()
    {
        return $this->immatriculation;
    }

    public function couleur()
    {
        return $this->couleur;
    }

    public function poids()
    {
        return $this->poids;
    }

    public function puissance()
    {
        return $this->puissance;
    }

    public function reservoir()
    {
        return $this->reservoir;
    }

    public function place()
    {
        return $this->place;
    }

    public function essence()
    {
        return $this->essence;
    }

    public function assure()
    {
        return $this->assure;
    }

    public function message()
    {
        return $this->message;
    }

    public function setAssure($assure)
    {
        $this->assure = $assure;
        $this->message = 'vous etes maintenant assuré';
    }
}
