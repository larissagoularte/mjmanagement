# Generated by Django 5.0.6 on 2024-05-24 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mjmgmt_anuncios', '0002_remove_imagensanuncio_imagens_imagensanuncio_images_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='anuncio',
            name='despesas',
            field=models.CharField(blank=True, choices=[('Não incluídas', 'Nao'), ('Água', 'Agua'), ('Luz', 'Luz'), ('Água e Luz', 'Agua Luz')], max_length=13, null=True),
        ),
        migrations.AddField(
            model_name='anuncio',
            name='fumadores',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='anuncio',
            name='infos_contrato',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='anuncio',
            name='limpeza_quinzenal',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='anuncio',
            name='link_maps',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='anuncio',
            name='wifi',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='anuncio',
            name='animais_domesticos',
            field=models.CharField(blank=True, choices=[('Permitido', 'Permitido'), ('Gato', 'Gato'), ('Cão', 'Cao'), ('Não permitido', 'Nao Permitido')], max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='anuncio',
            name='titulo',
            field=models.CharField(max_length=40),
        ),
    ]